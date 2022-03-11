import React, {useState} from "react";
import BodyContainer from "../utils/container/BodyContainer";
import Button from "@mui/material/Button";
import IndexMessageBack from "./IndexMessageBack";
import DetailMessage from "./DetailMessage";

const MessageContainer = () => {
    const [pageToDisplay, setPageTodisplay] = useState({
        name: "index",
        valueSelected: null
    });

    const [appState, setAppState] = useState({
        loading: true,
        messages: null
    });

    const displayNewMessagePage = () => {
        setPageTodisplay({name: "add", valueSelected: null});
    }

    const displayIndexMessagePage = () => {
        setPageTodisplay({name: "index", valueSelected: null});
    }

    if (pageToDisplay.name === "index"){
        return(
            <BodyContainer
                title="Mes Messages"
                subtitle="Tableau de gestion de mes messages (ajouts, édition, suppression)"
                children={
                    <IndexMessageBack
                        pageToDisplay={pageToDisplay}
                        setPageToDisplay={setPageTodisplay}
                        appState={appState}
                        setAppState={setAppState}
                    />
                }
            />
        )
    } else if ( pageToDisplay.name === "detail"){
        return (
            <BodyContainer
                title="Détail de message"
                subtitle="Affichage du détail d'un message reçu"
                buttonAction={
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={displayIndexMessagePage}
                    >
                        Retour au Tableau des messages
                    </Button>
                }
                children={
                    <DetailMessage
                        messageSelected={pageToDisplay.valueSelected}
                    />
                }
            />
        )
    }
}

export default MessageContainer