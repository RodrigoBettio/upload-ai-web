import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Separator } from './components/ui/separator';
import { Button } from "./components/ui/button";
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select';
import { Slider } from './components/ui/slider';
export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py-1 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Projeto com AI</h1>
        
       <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Desenvolvido por Rodrigo</span>
      
        <Separator orientation='vertical' className='h-10'/>
        
        
        <Button variant="outline">
          <Github className="w-4 h-4 mr-2"/>
          Github
        </Button>        
       </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'> 
          <div className='grid grid-rows-2 gap4 flex-1 space-y-2'>
            <Textarea
            className='resize-none p-4 leading-relaxed ' 
            placeholder="Insira o prompt desejado..." 
            />

            <Textarea 
            className='resize-none p-4 leading-relaxed'
            placeholder="Resultado gerado pela IA..." 
            readOnly
            />
          </div>

          <p className='text-sm text-muted-foreground'>Lembre-se: Você pode usar a variável <code className='text-blue-400'>{'{transcription}'}</code> para adicionar o conteúdo da transcrição do video selecionado.</p>
        </div>

        <aside className='w-80 space-y-6'>
          <form className='space-y-6'>
            <label 
            htmlFor="video"
            className='border flex rounded-lg aspect-video cursor-pointer border-dotted text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
            >
            <FileVideo  className='w-4 h-4'/>
              Carregue seu Vídeo 
            </label>
            
            <input type="file" id="video" accept="video/mp4" className='sr-only'/>
            <Separator/>
            
            <div className='space-y-2'> 
            <Label htmlFor="transcription_prompt"> Prompt de transcrição </Label>
            <Textarea 
              id="transcription_prompt" 
              className='h-20 leading-relaxed resize-none'
              placeholder='Inclua palavras-chave mencionadas no vídeo separadas por virgula'
            />
            </div>

            <Button type="submit" className='p-3 w-full '>
              Carregar Video
              <Upload className="h-4 w-4 ml-2"/>
            </Button>

          </form>

          
          <form className='space-y-6'>

          <div className='space-y-2'>
            <Label>Prompt</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt">

                </SelectValue>
              </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>
                    Título do Youtube
                  </SelectItem>
                  <SelectItem value='description'>
                    Descrição do Youtube
                  </SelectItem>
                </SelectContent>
            </Select>
            </div>

            <div className='space-y-2'>
            <Label>Modelo</Label>
            <Select disabled defaultValue='gpt3.5'>
              <SelectTrigger>
                <SelectValue>

                </SelectValue>
              </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>
                    GPT 3.5-Turbo 16k
                  </SelectItem>
                </SelectContent>
            </Select>
            <span className='block text-xs text-muted-foreground italic'> Em breve terá mais opções</span>
            </div>

            <Separator/>

            <div className='space-y-4'>
              <Label>Temperatura</Label>
              <Slider>
                min={0}
                max={1}
                step={0.1}
              </Slider>
              <span className='block text-xs text-muted-foreground italic leading-relaxed'> Valores mais altos tendem a deixar o resultado mais criativo mas com menor precisão.</span>
            </div>

            <Button type="submit" className='w-full'>
              Executar
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
    
  )
}

