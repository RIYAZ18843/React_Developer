import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

const HookDemo = () => {
    const [count, setCount] = useState(0);
    const { theme, toggleTheme } = useTheme();

    // useEffect example: updating document title
    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log(`Effect: Count is now ${count}`);

        // Cleanup example (optional but good practice)
        return () => {
            console.log('Effect cleanup');
        };
    }, [count]);

    const containerStyle = {
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
        color: theme === 'light' ? '#333333' : '#ffffff',
        boxShadow: theme === 'light'
            ? '0 10px 25px rgba(0,0,0,0.1)'
            : '0 10px 25px rgba(0,0,0,0.5)',
        maxWidth: '400px',
        margin: '2rem auto',
        fontFamily: '"Outfit", sans-serif'
    };

    const buttonStyle = {
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
        margin: '0.5rem',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'transform 0.1s active',
        backgroundColor: '#007AFF',
        color: 'white'
    };

    const toggleButtonStyle = {
        ...buttonStyle,
        backgroundColor: theme === 'light' ? '#333' : '#f0f0f0',
        color: theme === 'light' ? '#fff' : '#333',
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ marginBottom: '1.5rem' }}>React Hooks Demo</h2>

            <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>Theme: <strong>{theme}</strong></p>
                <button
                    style={toggleButtonStyle}
                    onClick={toggleTheme}
                >
                    Toggle Theme
                </button>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0' }}>{count}</p>
                <button
                    style={buttonStyle}
                    onClick={() => setCount(prev => prev + 1)}
                >
                    Increment
                </button>
                <button
                    style={{ ...buttonStyle, backgroundColor: '#FF3B30' }}
                    onClick={() => setCount(prev => prev - 1)}
                >
                    Decrement
                </button>
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
                Changing the count updates the document title (useEffect)
            </p>
        </div>
    );
};

export default HookDemo;
