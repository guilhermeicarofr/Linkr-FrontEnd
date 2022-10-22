import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import { setUser } from "../../services/localstorage";

export default function PrivatePage({children}) {
    const {config, setConfig, userData, setUserData} = useContext(LoginContext);

    const data = JSON.parse(localStorage.getItem("linkr"));

    const navigate = useNavigate();

    useEffect(() => {
        if(!data) {
            if(window.confirm("Please Login to continue")) {
                navigate("/")
            }
        } else if(!userData || !config) {
            setUserData(data);
            setConfig({ headers: { Authorization: `Bearer ${data.token}`}})
            setUser(data);
        }
    }, [config, setConfig, setUserData, data, userData, navigate]);

    if(!userData || !config) {
        return (
            <></>
        );
    }
 
    return (
        <>
            {children};
        </>
    );
};