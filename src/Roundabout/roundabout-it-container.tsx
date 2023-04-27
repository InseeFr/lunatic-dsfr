import React from "react";

export function RoundaboutItContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="roundabout-iteration-title fr-col-12 fr-mb-3w">
            <div
                className="fr-grid-row fr-border"
                style={{ justifyContent: "space-between", borderBottom: "solid #DDDDDD 1px" }}
            >
                {children}
            </div>
        </div>
    );
}
