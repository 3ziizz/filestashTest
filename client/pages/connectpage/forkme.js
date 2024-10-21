import React from "react";
import "./forkme.scss";
import { t } from "../../locales/";

export const ForkMe = ({ repo = "https://www.efinance.com.eg/service/efinance-cloud/" }) => {
    return (
        <div className="component_forkme">
            <a href={repo} className="efinance-corner" aria-label="Visit eFinance Cloud" rel="nofollow" target="_blank">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMcmeW33E6pMbqd_ax9vxCiVgH9GYarF2NA&s" // Replace with the correct logo URL
                    alt="eFinance Cloud Logo"
                    width="80"
                    height="80"
                    style={{ borderRadius: "50%" }}
                />
            </a>
        </div>
    );
};

export const PoweredByFilestash = () => {
    return (
        <div className="component_poweredbyfilestash">
            { t("Powered by") } <strong><a href="https://www.efinance.com.eg/service/efinance-cloud/">E-Finance Cloud</a></strong>
        </div>
    );
};
