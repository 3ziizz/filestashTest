import React from "react";
import "./forkme.scss";
import { t } from "../../locales/";

export const ForkMe = ({ repo = "https://www.efinancecloud.com/" }) => {
    return (
        <div className="component_forkme">
            <a href={repo} className="efinance-corner" aria-label="Visit eFinance Cloud" rel="nofollow" target="_blank">
                <img
                    src="https://raw.githubusercontent.com/3ziizz/filestashTest/refs/heads/master/client/pages/connectpage/logo.png" // Replace with the correct logo URL
                    alt="eFinance Cloud Logo"
                    width="200" 
                    height="85" 
                    style={{ marginTop: '20px', marginRight: '-40px' }} // Corrected inline styles
                />
            </a>
        </div>

    );
};

export const PoweredByFilestash = () => {
    return (
        <div className="component_poweredbyfilestash">
            { t("Powered by") } <strong><a href="https://www.efinancecloud.com/">E-Finance Cloud</a></strong>
        </div>
    );
};
