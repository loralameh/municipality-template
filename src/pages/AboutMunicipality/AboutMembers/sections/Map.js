import React from "react";
import MKBox from "components/MKBox";

export default function Map() {
  return (
    <MKBox sx={{ mt: { xs: 3, lg: 3 }, mx: "auto" }}>
      <iframe
        title="municipality building map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9211383706574!2d35.676740715018035!3d33.39922158078863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ec7faf33656ad%3A0x5ca127aecd6129f9!2z2KjZhNiv2YrYqSDYrdin2LXYqNmK2Kc!5e0!3m2!1sen!2slb!4v1672000566284!5m2!1sen!2slb"
        width={400}
        height={400}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MKBox>
  );
}
