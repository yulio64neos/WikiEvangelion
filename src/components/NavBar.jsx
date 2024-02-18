import React from 'react';

const Menu = () => {
    const classNav = "navbar navbar-expand-lg";
    const divContainer = "container-fluid";
    const a_navbar = "navbar-brand";
    const img_path = "https://seeklogo.com/images/N/nerv-logo-3F7E5E1B2B-seeklogo.com.png";
    const img_class = "img_class";
    const img_alt = "Nerv Logo";

    //variables para el button
    const buttonClass = "navbar-toggler";
    const type = "button";
    const dataBsToggle = "collapse";
    const dataBsTarget = "#navbarSupportedContent";
    const ariaControls = "navbarSupportedContent";
    const ariaExpanded = "false";
    const ariaLabel = "Toggle navigation";
    const buttonIcon = "navbar-toggler-icon";

    //variables para el contenido del navbar
    const divNav = "collapse navbar-collapse";
    //const idDivNav = "navbarSupportedContent";
    const ulNav = "navbar-nav me-auto mb-2 mb-lg-0";
    const liNav = "nav-item";
    const aNavLink = "nav-link anav";

    //menú de objetos

    const menu = {
        "Inicio" : "Evangelion",
        "Personajes" : "Personajes",
        "AcercaDe" : "Acerca de",
        "EvaNetflix" : "Eva Netflix"
    };
    
    return (
        <React.Fragment>
            <nav className={classNav}>
                <div className={divContainer}>
                    <a className={a_navbar}>
                        <img className={img_class} src={img_path} alt={img_alt}></img>
                    </a>
                    <button className={buttonClass} type={type} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} aria-controls={ariaControls} aria-expanded={ariaExpanded} aria-label={ariaLabel}>
                        <span className={buttonIcon}></span>
                    </button>
                    <div className={divNav} id={ariaControls}>
                        <ul className={ulNav}>
                            <li className={liNav}>
                                <a className={aNavLink} href='#'>{menu.Inicio}</a>
                            </li>
                            <li className={liNav}>
                                <a className={aNavLink} href='#'>{menu.Personajes}</a>
                            </li>
                            <li className={liNav}>
                                <a className={aNavLink} href='#'>{menu.AcercaDe}</a>
                            </li>
                            <li className={liNav}>
                                <a className={aNavLink} href='#'>{menu.EvaNetflix}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default Menu;