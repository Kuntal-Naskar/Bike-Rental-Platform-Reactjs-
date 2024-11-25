import React,{useState,useEffect} from 'react';
import Spinner from './Spinner';
import RMainbar from './RMainbar';
import '../css/Home.css';
import Brands from './Brands';

const FeatureBikes = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading
  }, []);

  return (
   
       <div className={`home ${loading ? 'loading' : 'loaded'}`}>
            {loading ? (
              <Spinner />
            ) : (
                <>
                <RMainbar/>
                    <Brands />
                </>
            )}
        </div>

      );
};

export default FeatureBikes;
