const AdencyMap = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-dark">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4364.127192217049!2d90.4233225753369!3d23.78178527864897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ec56dd8bff%3A0x28df3c14cdf628eb!2sAdency%20Ltd.!5e1!3m2!1sen!2sbd!4v1788068805671!5m2!1sen!2sbd"
        title="Adency Ltd. location"
        className="size-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default AdencyMap;
