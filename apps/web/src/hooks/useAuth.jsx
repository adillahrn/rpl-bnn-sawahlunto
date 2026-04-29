import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, loginWithGoogle as firebaseLogin, logout as firebaseLogout } from '../lib/firebase';
import { client } from '../lib/sanity';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [adminRole, setAdminRole] = useState(null); // 'superadmin', 'admin', or null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Check if user is super admin
        if (currentUser.email === 'adillahridwan24@gmail.com') {
          setAdminRole('superadmin');
        } else {
          // Check Sanity for admin role
          try {
            const adminDoc = await client.fetch(
              `*[_type == "admin" && email == $email][0]`,
              { email: currentUser.email }
            );
            if (adminDoc) {
              setAdminRole(adminDoc.role || 'admin');
            } else {
              setAdminRole(null); // Not an admin
            }
          } catch (error) {
            console.error("Error fetching admin role:", error);
            setAdminRole(null);
          }
        }
      } else {
        setAdminRole(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      await firebaseLogin();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await firebaseLogout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, adminRole, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
