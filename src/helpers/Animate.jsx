const Animate = ({ref, onScreen, children })=>{
    return (
        <div
          ref={ref}
          style={{
            opacity: onScreen ? 1 : 0,
            translate: onScreen ? "none" : "0 2rem",
            transition: "600ms ease-in-out",
          }}
        >
          {children}
        </div>
      );
}
export default Animate;