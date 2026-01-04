import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

const RefDemo = () => {
    const { theme } = useTheme();
    const [count, setCount] = useState(0);

    // 1. Ref for DOM access
    const inputRef = useRef(null);

    // 2. Ref for tracking values without re-renders
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    const handleFocus = () => {
        inputRef.current.focus();
    };

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
        transition: 'all 0.2s ease',
        backgroundColor: '#007AFF',
        color: 'white'
    };

    const inputStyle = {
        padding: '0.8rem',
        borderRadius: '8px',
        border: `1px solid ${theme === 'light' ? '#ddd' : '#444'}`,
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        width: '100%',
        marginBottom: '1rem',
        boxSizing: 'border-box'
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ marginBottom: '1.5rem' }}>useRef Hook Demo</h2>

            <div style={{ marginBottom: '1.5rem' }}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type something..."
                    style={inputStyle}
                />
                <button
                    style={buttonStyle}
                    onClick={handleFocus}
                >
                    Focus Input
                </button>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                <p>Component State Count: <strong>{count}</strong></p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    Total Renders (via Ref): <strong>{renderCount.current}</strong>
                </p>
                <button
                    style={{ ...buttonStyle, backgroundColor: '#34C759' }}
                    onClick={() => setCount(c => c + 1)}
                >
                    Re-render Component
                </button>
            </div>

            <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.6 }}>
                Updating the "Total Renders" ref doesn't cause a re-render.
            </p>
        </div>
    );
};

export default RefDemo;
