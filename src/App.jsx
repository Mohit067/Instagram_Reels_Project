import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Reels } from './components/organism/reels/Reel';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Reels />
    </QueryClientProvider>
  )
}

export default App
