import React from "react";

class ErrorBoundary extends React.Component{
     constructor(props){
          super(props);
          this.state = { hasError: false };
     }

     static getDerivedStateFromError(error) {
          // Update state to show fallback UI
          return { hasError: true };
     }
     componentDidCatch(error, info) {
          console.error("Error caught by Error Boundary:", error);
          console.info("Component stack:", info);
     }

     render(){
          if (this.state.hasError) {
               return (
                    <>
                         <h2>Something went wrong.</h2>
                         <button className="btn btn-warning" onClick={()=>window.location.reload()}>Realod</button>
                    </>
                    )
          }
          return this.props.children;
     }
}

export default ErrorBoundary;