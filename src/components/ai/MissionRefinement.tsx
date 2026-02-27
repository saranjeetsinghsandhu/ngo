
"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { refineMissionStatement, type RefineMissionStatementOutput } from '@/ai/flows/refine-mission-statement-flow';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

export function MissionRefinement() {
  const [mission, setMission] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RefineMissionStatementOutput | null>(null);

  const handleRefine = async () => {
    if (!mission.trim()) return;
    setLoading(true);
    try {
      const output = await refineMissionStatement({ missionStatement: mission });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-12 shadow-lg border-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="w-5 h-5 text-accent" />
          AI Mission Refiner
        </CardTitle>
        <CardDescription>
          Paste your current mission statement and let our AI help you make it more impactful.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea 
          placeholder="Enter your NGO mission statement here..."
          className="min-h-[120px] resize-none"
          value={mission}
          onChange={(e) => setMission(e.target.value)}
        />
        
        {result && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Refined Version
              </h4>
              <p className="text-foreground leading-relaxed italic">"{result.refinedMissionStatement}"</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Suggestions</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {result.suggestions.map((s, i) => (
                  <li key={i} className="text-sm bg-muted p-2 rounded flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleRefine} 
          disabled={loading || !mission.trim()} 
          className="w-full bg-primary hover:bg-primary/90"
        >
          {loading ? (
            <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Refining...</>
          ) : (
            'Refine Statement'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
