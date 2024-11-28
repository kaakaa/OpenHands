import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clear } from "node:console";

type SliceState = {
  files: string[]; // base64 encoded images
  initialQuery: string | null;
  selectedGitHubRepository: string | null;
  gitRepositoryURL: string | null;
  importedProjectZip: string | null; // base64 encoded zip
};

const initialState: SliceState = {
  files: [],
  initialQuery: null,
  selectedGitHubRepository: null,
  gitRepositoryURL: null,
  importedProjectZip: null,
};

export const selectedFilesSlice = createSlice({
  name: "initialQuery",
  initialState,
  reducers: {
    addFile(state, action: PayloadAction<string>) {
      state.files.push(action.payload);
    },
    removeFile(state, action: PayloadAction<number>) {
      state.files.splice(action.payload, 1);
    },
    clearFiles(state) {
      state.files = [];
    },
    setInitialQuery(state, action: PayloadAction<string>) {
      state.initialQuery = action.payload;
    },
    clearInitialQuery(state) {
      state.initialQuery = null;
    },
    setSelectedGitHubRepository(state, action: PayloadAction<string | null>) {
      state.selectedGitHubRepository = action.payload;
    },
    clearSelectedGitHubRepository(state) {
      state.selectedGitHubRepository = null;
    },
    setGitRepositoryUrl(state, action: PayloadAction<string | null>) {
      state.gitRepositoryURL = action.payload;
    },
    clearGitRepositoryUrl(state) {
      state.gitRepositoryURL = null;
    },
    setImportedProjectZip(state, action: PayloadAction<string | null>) {
      state.importedProjectZip = action.payload;
    },
  },
});

export const {
  addFile,
  removeFile,
  clearFiles,
  setInitialQuery,
  clearInitialQuery,
  setSelectedGitHubRepository,
  clearSelectedGitHubRepository,
  setGitRepositoryUrl,
  clearGitRepositoryUrl,
  setImportedProjectZip,
} = selectedFilesSlice.actions;
export default selectedFilesSlice.reducer;
