import { Fragment } from "react";
import Button from "./Button";
import HeaderImage from '../../Assets/Header.jpg';


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
                    <img src={HeaderImage} alt="delicious foods"/>
                </div>
            
        </Fragment>

    )

})
export default Header;