import os
import pandas as pd
 
save_path = ""
 
in_filename = os.path.join(save_path,'books_large.txt')
out_filename = os.path.join(save_path,'books_large.csv')
 
df = pd.read_csv(in_filename, sep=",")
df.to_csv(out_filename, index=False)