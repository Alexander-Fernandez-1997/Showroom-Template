import { simpleFetch } from "utils/simpleFetch";

export const StickyWp = async () => {
  const { wpNumber } = await simpleFetch("stores/social", "isr", "60");
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://api.whatsapp.com/send?phone=${
        wpNumber || ""
      }&text=Me%20interesa%20saber%20mas%20sobre%20los%20productos`}
    >
      <div
        className="wp"
        style={{
          backgroundImage: "url(/images/icons/wp.png)",
        }}
      ></div>
    </a>
  );
};
