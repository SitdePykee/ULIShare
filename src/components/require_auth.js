import { useNavigate } from 'react-router-dom';
import { auth } from '../App';
import { useEffect } from 'react';

export default function RequireAuth({ component }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser == null) {
      navigate('/signin');
    }
  }, []);

  return component;
}
