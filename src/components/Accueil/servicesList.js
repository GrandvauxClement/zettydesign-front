import {
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import Api from "../../api";

const ServiceList = ({service, index}) => {
    const urlImage = Api.baseUrl + 'static/images/services/'+service.image;
    if (index%2 === 0){
        return (
            <Grid item container xs={12} direction="row">
                <Grid item>
                    <h1> {service.title} et index : {index}</h1>
                    <img src={urlImage} alt={service.title}/>
                </Grid>
            </Grid>
        )
    }else{
        return (
            <Grid item container xs={12} direction="row">
                <Grid item>
                    <h1> {service.title} et index : {index}</h1>
                    <img src={urlImage} alt={service.title}/>
                </Grid>
            </Grid>
        )
    }

}

export default ServiceList;