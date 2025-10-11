// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import '../index.css';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-neutral-900 text-white relative">
//       {/* Background Image */}
//       <div 
//         className="fixed inset-0 bg-neutral-900 bg-cover bg-no-repeat bg-top-right z-0"
//         style={{
//           backgroundImage: "url('../assets/img/bg.jpg')",
//           backgroundAttachment: 'fixed'
//         }}
//       ></div>
      
//       <div className="relative z-10">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-no-repeat bg-right-top bg-fixed z-0"
        style={{
          background: '#040404 url("src/assets/img/bg3.png") top right no-repeat',
          backgroundSize: 'fit'
        }}
      ></div>
      
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;