import React, {useState} from "react";
import BodyContainer from "../utils/container/BodyContainer";
import Button from "@mui/material/Button";
import IndexMessageBack from "./IndexMessageBack";

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
                buttonAction={
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={displayIndexMessagePage}
                    >
                        Ajouter un message
                    </Button>
                }
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
    }
}

export default MessageContainer