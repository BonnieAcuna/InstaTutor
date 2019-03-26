import React from "react";

export function Container({className, fluid, children}) {
    return <div className={` container${fluid ?  "-fluid" : ""}  ${className}`}>{children}</div>
}

export function Row({ fluid, children}) {
    return <div className={` row${fluid ? "-fluid" : ""} `}>{children}</div>
}

export function Col({ size, children}) {
    return (<div className={ size.split(" ").map(size => "col-" + size).join(" ")}>{children}</div>);
}