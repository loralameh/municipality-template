import React, { useEffect } from "react";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { getAllServiceCategories } from "features/serviceCategory/serviceCategorySlice";
import MainPage from "../sections/MainPage";

function MunicipalityServices() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceCategories("municipality"));
  }, [dispatch]);

  const { categories } = useSelector((store) => store.serviceCategory);

  return (
    <>
      <MainPage
        getData={() => getAllServiceCategories("municipality")}
        data={categories}
        pageName="خدمات البلدية"
        baseRoute="/pages/municipality-services"
      />
    </>
  );
}

export default MunicipalityServices;
