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

const options = [
  { value: "en", label: "EN" },
  { value: "uk", label: "UK" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState({
    value: i18n.language,
    label: i18n.language.toUpperCase(),
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
              <span className="user-name">{t("Sign in")}</span>
              <UserLogo className="user-logo" />
            </Link>
          )}

          <div className="select-wrapper">
            <Select
              value={selectedOption}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
        </nav>
      </StyledMainContainer>
    </StyledHeader>
  );
};

export default Header;
