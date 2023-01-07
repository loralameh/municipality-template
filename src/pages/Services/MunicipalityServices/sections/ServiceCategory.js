// // @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// // Material Kit 2 React components
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
// import { useSelector } from "react-redux";

// function ServiceCategory() {
//   const { categories } = useSelector((store) => store.serviceCategory);

//   return (
//     <MKBox component="section" py={2} id="building">
//       <Container>
//         <Grid container item xs={12} lg={6}>
//           <MKTypography variant="h3" mb={6}>
//             مجوعات الخدمات
//           </MKTypography>
//         </Grid>
//         <Grid container spacing={3}>
//           {categories.map((element) => {
//             return (
//               <Grid item xs={12} sm={6} lg={3}>
//                 <BackgroundBlogCard
//                   image={element.image}
//                   title={element.name}
//                   description={element.description}
//                   action={{
//                     type: "internal",
//                     route: `/pages/municipality-services/${element._id}`,
//                     color: "info",
//                     label: "انقر للمزيد",
//                   }}
//                 />
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Container>
//     </MKBox>
//   );
// }

// export default ServiceCategory;
