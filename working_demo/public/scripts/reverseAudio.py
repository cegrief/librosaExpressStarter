import sys
import librosa

path = sys.argv[1]
y, sr = librosa.load(path);
librosa.output.write_wav(path[:-4]+'-out.wav', y[::-1], sr);
print path[:-4]+'-out.wav'