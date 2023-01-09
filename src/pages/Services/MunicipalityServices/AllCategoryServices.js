import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//redux calls
import { useDispatch, useSelector } from "react-redux";
import { getMunicipalityServices } from "features/municipalityService/municipalityServiceSlice";
import { getServiceCategory } from "features/serviceCategory/serviceCategorySlice";

import AllServices from "../sections/AllServices";
import Loader from "examples/Loader";

function AllCategoryServices() {
  const dispatch = useDispatch();

  const { municipalityServices, isLoading } = useSelector((store) => store.municipalityServices);
  const { category } = useSelector((store) => store.serviceCategory);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getMunicipalityServices(categoryId));
    dispatch(getServiceCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <>
      {isLoading && <Loader />}
      <AllServices
        data={municipalityServices}
        category={category}
        baseRoute="/pages/municipality-services"
      />
    </>
  );
}

export default AllCategoryServices;
