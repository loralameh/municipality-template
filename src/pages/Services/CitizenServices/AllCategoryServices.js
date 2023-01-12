import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//redux calls
import { useDispatch, useSelector } from "react-redux";
import { getCitizenServices } from "features/citizenService/citizenServiceSlice";
import { getServiceCategory } from "features/serviceCategory/serviceCategorySlice";

import AllServices from "../sections/AllServices";
import Loader from "examples/AttentionCatchers/Loader";

function AllCategoryServices() {
  const dispatch = useDispatch();

  const { citizenServices, isLoading } = useSelector((store) => store.citizenServices);
  const { category } = useSelector((store) => store.serviceCategory);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getCitizenServices(categoryId));
    dispatch(getServiceCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <>
      {isLoading && <Loader />}
      <AllServices data={citizenServices} category={category} baseRoute="/pages/citizen-services" />
    </>
  );
}

export default AllCategoryServices;
