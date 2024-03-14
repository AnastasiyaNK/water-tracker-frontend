import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserAuth from "./UserAuth/UserAuth";
import { StyledHeader } from "./Header.styled";
import { StyledMainContainer } from "../../styled";
import { selectUserIsSignedIn } from "../../redux/user/userSelectors";

import { ReactComponent as MainLogo } from "assets/icons/logo-water.svg";
import { ReactComponent as UserLogo } from "assets/icons/user.svg";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import flagUK from "assets/images/flagUkraine.png";
import flagEN from "assets/images/flagUnitedKingdom.png";

const options = [
  {
    value: "en",
    label: (
      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <img src={flagEN} width={16} alt="EN flag" />
        EN
      </span>
    ),
  },
  {
    value: "uk",
    label: (
      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <img src={flagUK} width={16} alt="UK flag" />
        UK
      </span>
    ),
  },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState({
    value: i18n.language,
    label: (
      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <img
          src={i18n.language === "en" ? flagEN : flagUK  }
          width={16}
          alt="UK flag"
        />
        {i18n.language.toUpperCase()}
      </span>
    ),
  });

  useEffect(() => {
    if (i18n.language === selectedOption.value) return;

    i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
  }, [selectedOption, i18n]);

  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <StyledHeader>
      <StyledMainContainer>
        <nav>
          <NavLink to="/welcome" className="link-logo">
            <MainLogo className="main-logo" />
          </NavLink>

          {isSignedIn ? (
            <UserAuth />
          ) : (
            <Link to="/signin" className="user-wrapper">
              <span className="user-name">{t("signIn")}</span>
              <UserLogo className="user-logo" />
            </Link>
          )}

          <div className="select-wrapper">
            <Select
              value={selectedOption}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={{
                control: (styles) => ({
                  ...styles,
                  width: "80px",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: 8,
                  height: "28px",
                  minHeight: "33px",
                  fontSize: "18px",
                  backgroundColor: "#f7f7fb",
                  appearance: "none",
                  fontWeight: 400,
                  lineHeight: 1.11,
                }),
                menuList: (styles) => ({...styles, padding: 0}),
                indicatorSeparator: () => ({ display: "none" }),
                indicatorsContainer: () => ({ padding: "0 8px 0 0" }),
                dropdownIndicator: (styles) => ({ ...styles, padding: 0 }),
                valueContainer: (styles) => ({
                  ...styles,
                  padding: "2px 0 2px 8px",
                  fontSize: "16px",
                }),
                singleValue: (styles) => ({ ...styles, fontSize: "16px" }),
                placeholder: (styles) => ({
                  ...styles,
                  color: "color: #121417;",
                  margin: 0,
                  paddingLeft: "18px",
                }),
              }}
            />
          </div>
        </nav>
      </StyledMainContainer>
    </StyledHeader>
  );
};

export default Header;
