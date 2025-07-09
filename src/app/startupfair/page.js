
// 'use client';
// import Link from 'next/link';
// import './startupfair.css';

// export default function StartupFair() {
//   return (
//     <div className="startup-container">
//       <Link href="/">
//         <button className="home-button">Home</button>
//       </Link>

//       <div className="center-content">
//         <h1 className="rolling-text">Coming Soon</h1>
//       </div>
//     </div>
//   );
// }
'use client';
import Link from 'next/link';
import './startupfair.css';

export default function StartupFair() {
  return (
    <div className="startup-container">
      <Link href="/">
        <button className="home-button" aria-label="Go to Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="white"
            className="home-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10"
            />
          </svg>
        </button>
      </Link>

      <div className="center-content">
        <h1 className="rolling-text">Coming Soon</h1>
      </div>
    </div>
  );
}
