import { useCurrentTime } from "./useCurrentTime";

export default function Clock() {
  const time = useCurrentTime();

  return time.toLocaleTimeString();
}
