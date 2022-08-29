import React, { useEffect, useState } from 'react';

const useClickedOutside = (ref, callback) => {

    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [ref]);

    return ref;
};

export {
    useClickedOutside,
}