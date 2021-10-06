import React from "react";
import { Link } from "gatsby";
import PageNotAvaliable from "../components/PageNotAvaliable";

// markup
const NotFoundPage = () => {
  return (
    <>
      <PageNotAvaliable title={'Pagina no disponible'} text={'La direccion solicitad no se encuentra disponible'}/>
    </>
  );
};

export default NotFoundPage;

