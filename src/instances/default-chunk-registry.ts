//
// Imports
//

import { HistoryChunk } from "../classes/chunks/HistoryChunk.js";
import { ImageChunk } from "../classes/chunks/ImageChunk.js";
import { ImageDataChunk } from "../classes/chunks/ImageDataChunk.js";
import { ShaderChunk } from "../classes/chunks/ShaderChunk.js";
import { ShaderColourParameterChunk } from "../classes/chunks/ShaderColourParameterChunk.js";
import { ShaderFloatParameterChunk } from "../classes/chunks/ShaderFloatParameterChunk.js";
import { ShaderIntegerParameterChunk } from "../classes/chunks/ShaderIntegerParameterChunk.js";
import { ShaderTextureParameterChunk } from "../classes/chunks/ShaderTextureParameterChunk.js";
import { TextureChunk } from "../classes/chunks/TextureChunk.js";

import { ChunkRegistry } from "../classes/ChunkRegistry.js";

import * as ChunkIdentifiers from "../data/chunk-identifiers.js";

//
// Default Chunk Registry
//

export const defaultChunkRegistry = new ChunkRegistry();

defaultChunkRegistry.register(ChunkIdentifiers.HISTORY, HistoryChunk);

defaultChunkRegistry.register(ChunkIdentifiers.IMAGE, ImageChunk);

defaultChunkRegistry.register(ChunkIdentifiers.IMAGE_DATA, ImageDataChunk);

defaultChunkRegistry.register(ChunkIdentifiers.SHADER, ShaderChunk);

defaultChunkRegistry.register(ChunkIdentifiers.SHADER_COLOUR_PARAMETER, ShaderColourParameterChunk);

defaultChunkRegistry.register(ChunkIdentifiers.SHADER_FLOAT_PARAMETER, ShaderFloatParameterChunk);

defaultChunkRegistry.register(ChunkIdentifiers.SHADER_INTEGER_PARAMETER, ShaderIntegerParameterChunk);

defaultChunkRegistry.register(ChunkIdentifiers.SHADER_TEXTURE_PARAMETER, ShaderTextureParameterChunk);

defaultChunkRegistry.register(ChunkIdentifiers.TEXTURE, TextureChunk);