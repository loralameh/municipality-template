import React, { useEffect } from "react";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { getAllServiceCategories } from "features/serviceCategory/serviceCategorySlice";
import MainPage from "../sections/MainPage";

function MunicipalityServices() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceCategories("citizen"));
  }, [dispatch]);

  const { categories } = useSelector((store) => store.serviceCategory);

  return (
    <>
      <MainPage
        getData={() => getAllServiceCategories("citizen")}
        data={categories}
        pageName="خدمات للأهالي"
        baseRoute="/pages/citizen-services"
      />
    </>
  );
}

export default MunicipalityServices;
