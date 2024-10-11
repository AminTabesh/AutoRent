import { supabase } from "../supabase/supabase";

async function getCars() {
  let { data: cars } = await supabase.from("cars").select("*");

  return cars
}

export default getCars;
