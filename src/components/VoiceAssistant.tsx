import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Extend the Window interface for speech recognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface VoiceAssistantProps {
  onMessage?: (message: string) => void;
}

export const VoiceAssistant = ({ onMessage }: VoiceAssistantProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState('');
  const { toast } = useToast();
  
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        
        if (event.results[current].isFinal) {
          setTranscript(transcript);
          handleVoiceCommand(transcript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "Voice Recognition Error",
          description: "Please try again.",
          variant: "destructive"
        });
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialize speech synthesis
    synthesisRef.current = window.speechSynthesis;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, []);

  const handleVoiceCommand = (command: string) => {
    console.log('Voice command:', command);
    onMessage?.(command);
    
    // Basic voice commands
    const lowerCommand = command.toLowerCase();
    let response = '';

    if (lowerCommand.includes('hello') || lowerCommand.includes('hi')) {
      response = 'Hello! Welcome to Browse Boost. How can I help you find the perfect tech product today?';
    } else if (lowerCommand.includes('products') || lowerCommand.includes('show me')) {
      response = 'I can help you browse our products. We have audio devices, wearables, cameras, accessories, smart home items, and spices.';
    } else if (lowerCommand.includes('headphones') || lowerCommand.includes('audio')) {
      response = 'Our Quantum Wireless Headphones are very popular, featuring active noise cancellation and 40-hour battery life.';
    } else if (lowerCommand.includes('smartwatch') || lowerCommand.includes('watch')) {
      response = 'The Aurora Smartwatch is perfect for fitness tracking with a stunning AMOLED display and 7-day battery life.';
    } else if (lowerCommand.includes('camera')) {
      response = 'Our Volta 4K Action Camera captures adventures in crisp 4K with advanced stabilization and waterproof housing.';
    } else if (lowerCommand.includes('keyboard')) {
      response = 'The Nova Mechanical Keyboard offers hot-swappable switches and per-key RGB lighting for the ultimate typing experience.';
    } else if (lowerCommand.includes('price') || lowerCommand.includes('cost')) {
      response = 'Our products range from affordable accessories starting at 249 rupees to premium cameras at 20,699 rupees.';
    } else if (lowerCommand.includes('spices')) {
      response = 'We have premium spices including turmeric powder, red chili powder, and cumin seeds from SpiceCo brand.';
    } else {
      response = 'I can help you find products, check prices, or learn about our categories. What would you like to know?';
    }

    speak(response);
  };

  const speak = (text: string) => {
    if (synthesisRef.current && text) {
      setIsPlaying(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      synthesisRef.current.speak(utterance);
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Voice Recognition Not Supported",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive"
      });
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      recognitionRef.current.start();
      setIsListening(true);
      toast({
        title: "Voice Assistant Active",
        description: "Listening... Speak your command.",
      });
    }
  };

  return (
    <Card className="fixed bottom-6 right-6 p-4 shadow-elegant bg-card/95 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <Button
            variant={isListening ? "default" : "outline"}
            size="lg"
            onClick={toggleListening}
            className={`relative ${isListening ? 'animate-pulse' : ''}`}
          >
            {isListening ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </Button>
          
          {isPlaying && (
            <div className="flex items-center gap-1 text-primary">
              <Volume2 className="h-4 w-4 animate-pulse" />
              <span className="text-sm">Speaking...</span>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Voice Assistant</p>
          {transcript && (
            <p className="text-xs mt-1 max-w-[200px] truncate">{transcript}</p>
          )}
        </div>
      </div>
    </Card>
  );
};