import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowHeader = ({children}) => {
    const location = useLocation();

    const [showHeader, setShowNoHeader] = useState(false);

    useEffect(() => {
        console.log('this is the location: ', location)
        if(location.pathname == '/' || location.pathname == '/adminHome' || location.pathname == '/adminLogin')
        {
            setShowNoHeader(false);
        }
        else
        {
            setShowNoHeader(true);
        }
    }, [location])

    return (
        <div> {showHeader && children} </div>
    )
}

export default MaybeShowHeader;