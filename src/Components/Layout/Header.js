import { Fragment } from "react";
import Button from "./Button";
import BannerImage from '../../Assets/Banner.jpg';


import  classes from './Header.module.css';
const Header=((props)=> {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1> MEALS FOR YOU</h1>
                {/*This props .onclick is rendered from the parent i.e app.js */}
                <Button onClick={props.onclick}/>
                </header>
                <div className={classes['main-image']}>
                    <img src={BannerImage} alt="delicious foods"/>
                </div>
            
        </Fragment>

    )

})
export default Header;