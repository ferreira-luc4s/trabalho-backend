# Usa a imagem base oficial do Node
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json tsconfig.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código-fonte (sem node_modules)
COPY . .

# Garante que a pasta node_modules local (se existir) não seja copiada
# Adicione também ao .dockerignore (ver abaixo)

# Expõe a porta padrão do Express
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
