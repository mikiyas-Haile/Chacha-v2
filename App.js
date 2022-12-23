import Auth from './Screens/Auth';
import { AppProvider, AppContext } from './AppContext';
import LoadedFonts from './Fonts'

export default function App() {

  return (
    <AppProvider>
      <LoadedFonts Child={Auth} />
    </AppProvider>
  );
}
