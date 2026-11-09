@echo off
title Web Victoria Rosso - Servidor de Vista Previa
echo ======================================================
echo   Iniciando la pagina web de Victoria Rosso...
echo   Se abrira automaticamente en tu navegador web.
echo   (No cierres esta ventana mientras quieras navegar la web)
echo ======================================================
echo.

cd /d "%~dp0web"
call npm run dev -- --open

pause

