ARG NODE_VERSION=18.20.3

FROM node:${NODE_VERSION} AS builder
WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

COPY tsconfig.json ./
COPY . .
USER root
RUN npm run build
USER node

FROM node:${NODE_VERSION} AS production

WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    # --mount=type=secret,id=yhkgqstbnf83k66qqbbarg6ap \
    npm ci --omit=dev
COPY --from=builder /usr/src/app/dist ./dist
USER node
EXPOSE 3000

CMD ["node", "dist/index.js"]