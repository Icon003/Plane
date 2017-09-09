            document.getElementById('windowControlMinimize').onclick = function()
            {
                win.minimize();
            };
            //Кнопка закрытия программы.
            document.getElementById('windowControlClose').onclick = function()
            {
                win.close();
            };
            //Кнопка открытия программы на полный экран.
            document.getElementById('windowControlMaximize').onclick = function()
            {
                if(win.isMaximized)
                    win.unmaximize();
                else
                    win.maximize();
            };
            
            win.on('maximize',function(){
                win.isMaximized = true; 
            });
            win.on('restore',function(){
                win.isMaximized = false; 
            });