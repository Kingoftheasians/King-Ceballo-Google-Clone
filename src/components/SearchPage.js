import React from "react";
import { Link } from "react-router-dom";
import Search from './Search';

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img src="https://upload.wikimedia.
                    org/wikipedia/commons/thumb/2/2f/
                    Google_2015_logo.svg/
                    320px-Google_2015_logo.svg.png"
                    alt="google-logo" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hide />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;