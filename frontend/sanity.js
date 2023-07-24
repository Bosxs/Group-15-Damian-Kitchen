import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const frontend = SanityClient({
  projectId:'toy1c2jk',
  dataset:'prodiction',
  useCdn:true,
  appVersion:'2021-10-21'
});
const builder = ImageUrlBuilder(frontend);
export const urlFor = source=>builder.image(source);
export default frontend;