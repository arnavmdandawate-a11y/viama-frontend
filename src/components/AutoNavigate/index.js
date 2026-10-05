import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Placeholder preserved from the original source tree. The component was
// imported but never rendered (its usage in App.js is commented out), so it was
// dropped from the production bundle and is absent from the sourcemaps.
const AutoNavigate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default AutoNavigate;