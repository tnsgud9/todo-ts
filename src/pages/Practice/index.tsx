import CountCreate from "./components/CountCreate";
import CountView from "./components/CountView";
import { CountProvider } from "./context/CountContext";

const PracticeIndex = () => {
  return (
    <CountProvider>
      <CountCreate />
      <CountView />
    </CountProvider>
  );
};
export default PracticeIndex;
